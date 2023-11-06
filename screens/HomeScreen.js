import MainLayout from '../layouts/MainLayout';
import { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

export default function HomeScreen({ navigation }) {
    
  const [tasks, setTask] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);
  
  const addTask = (task) => {
    setTask ([...tasks, task])
  }


    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoList tasks={tasks}/>
                <ToDoForm addTask={addTask}/>
            </SafeAreaView>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </MainLayout>      
    );
}