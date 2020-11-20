import React, { FC } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProjectsDuck from '../redux/projects/projects.duck';
import UIDuck from '../redux/ui/ui.duck';
import ProjectsService from '../services/projects/projects.service';
import LoginDuck from '../redux/login/login.duck';
import { useNavigation } from '@react-navigation/native';
import Colors, { statuses } from '../constants/Colors';

const ProjectItems: FC = () => {
  const { content } = useSelector(ProjectsDuck.getProjects);
  const token: string = useSelector(LoginDuck.getUserToken);
  const dispatch = useDispatch();
  // TODO: add a type
  const navigation = useNavigation<any>();

  const getDetail = (id: string) => {
    dispatch(UIDuck.setLoading(1));
    dispatch(ProjectsDuck.clearDetail());
    ProjectsService.getDetail(token, id)
      .then(({ data }) => {
        dispatch(ProjectsDuck.setDetail(data));
      })
      .then(() => navigation.navigate('Detail'))
      .catch((e) => {
        // tslint:disable-next-line:no-console
        console.error(e);
      })
      .finally(() => dispatch(UIDuck.setLoading(-1)));
  };

  const renderItems = () => {
    return content?.map((item, index) => (
      <TouchableOpacity key={`${index}-project`} style={styles.itemContainer} onPress={() => getDetail(item.id)}>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.lang}>
              {item.sourceLang}
              {` > `}
              {item.targetLangs.map((item, index, { length }) => `${item}${index !== length - 1 ? ', ' : ''}`)}
            </Text>
          </View>
        </View>
        <Text style={[styles.status, { backgroundColor: statuses[item.status] }]}>{item.status}</Text>
      </TouchableOpacity>
    ));
  };
  return <ScrollView style={styles.container}>{renderItems()}</ScrollView>;
};

export default ProjectItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f7f9',
    margin: 15
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdee2',
    backgroundColor: '#fff',
    padding: 10
  },
  itemName: {
    fontWeight: 'bold',
    color: Colors.light.text,
    fontSize: 16,
    paddingBottom: 3
  },
  lang: {
    display: 'flex',
    alignItems: 'center',
    color: Colors.light.tabIconDefault
  },
  status: {
    alignSelf: 'center',
    padding: 10
  }
});
