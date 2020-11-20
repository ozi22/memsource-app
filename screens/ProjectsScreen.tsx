import React, { useEffect, FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectsService from '../services/projects/projects.service';
import { useDispatch, useSelector } from 'react-redux';
import LoginDuck from '../redux/login/login.duck';
import ProjectsDuck from '../redux/projects/projects.duck';
import UIDuck from '../redux/ui/ui.duck';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import ProjectItems from '../components/ProjectItems';
import { hours, hoursVerbose } from '../utils/hoursMapping.util';
import Colors from '../constants/Colors';

const ProjectsScreen: FC<any> = () => {
  const token: string = useSelector(LoginDuck.getUserToken);
  const dispatch = useDispatch();

  const [sliderValue, setSliderValue] = useState<number>(6);
  const [displayValue, setDisplayValue] = useState<number>(6);

  useEffect(() => {
    dispatch(UIDuck.setLoading(1));
    ProjectsService.getProjectsDueInHours(token, hours[sliderValue])
      .then(({ data }) => {
        dispatch(ProjectsDuck.setProjects(data));
      })
      .catch((e) => {
        // tslint:disable-next-line:no-console
        console.error(e);
      })
      .finally(() => dispatch(UIDuck.setLoading(-1)));
  }, [sliderValue]);

  const generatePickerItems = () =>
    Object.keys(hours).map((key) => <Picker.Item label={hoursVerbose[+key]} value={+key} key={`${key}-picker`} />);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={6}
            minimumTrackTintColor="#aaddff"
            maximumTrackTintColor="#aaddff"
            thumbTintColor={Colors.light.tint}
            value={sliderValue}
            step={1}
            onSlidingComplete={(value) => setSliderValue(+value)}
            onValueChange={(value) => setDisplayValue(+value)}
          />
          <Text style={{ alignSelf: 'center' }}>
            <Text>Due: </Text>
            <Text style={{ fontWeight: 'bold' }}>{hoursVerbose[+displayValue]}</Text>
          </Text>
        </View>
        <Picker
          selectedValue={sliderValue}
          style={{ height: 30, width: 140 }}
          onValueChange={(itemValue) => {
            setSliderValue(+itemValue);
            setDisplayValue(+itemValue);
          }}
        >
          {generatePickerItems()}
        </Picker>
      </View>
      <ProjectItems />
    </View>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  sliderContainer: {
    flexDirection: 'column',
    flexGrow: 1
  },
  slider: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    paddingRight: 30,
    paddingBottom: 2,
    paddingTop: 5
  }
});
