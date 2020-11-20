import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import ProjectsDuck from '../redux/projects/projects.duck';
import Colors, { statuses } from '../constants/Colors';

const DetailScreen: FC = () => {
  const { name, sourceLang, targetLangs, status } = useSelector(ProjectsDuck.getDetail);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemName}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.lang}>
            {sourceLang}
            {` > `}
            {targetLangs?.map((item, index, { length }) => `${item}${index !== length - 1 ? ', ' : ''}`)}
          </Text>
        </View>
      </View>
      <Text style={[styles.status, { backgroundColor: statuses[status] }]}>{status}</Text>
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#dcdee2',
    backgroundColor: '#fff',
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  itemName: {
    fontWeight: 'bold',
    color: Colors.light.text,
    fontSize: 16,
    paddingBottom: 3
  },
  lang: {
    color: Colors.light.tabIconDefault,
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    padding: 10,
    alignSelf: 'flex-start'
  }
});
