import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react'
import { StyleSheet } from 'react-native'

import { MenuScreen, DetailMealScreen, FormMealScreen, NewOrderScreen, ProgressOrderScreen, ResumeOrderScreen, TakeAwayMessage, EatHere } from './views'
import { ButtonResume } from './component/'

import { FirebaseState } from './context/firebase'
import { OrderState } from './context/orders'

// Creamos el Stack.
const Stack = createStackNavigator()


const App = () => {
  return (
    <>
      <FirebaseState>
        <OrderState>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="New-order" screenOptions={{
              headerStyle: {
                backgroundColor: '#ffda00'
              },
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerTintColor: '#000'
            }}>
              <Stack.Screen name="New-order" component={NewOrderScreen} options={{ title: "New Order" }} />
              <Stack.Screen 
                name="Menu" 
                component={MenuScreen} 
                options={{ 
                  title: 'Our Menu',
                  headerRight: () => (<ButtonResume />)
                }}
              />
              <Stack.Screen name="Detail-meal" component={DetailMealScreen} options={{ title: 'Meal Detail' }} />
              <Stack.Screen name="Form-meal" component={FormMealScreen} options={{ title: 'Form Meal' }} />
              <Stack.Screen name="Resume-order" component={ResumeOrderScreen} options={{ title: 'Order Resume' }} />
              <Stack.Screen name="Take-away" component={TakeAwayMessage} options={{ title: 'In/Out'}} />
              <Stack.Screen name="Eat-here" component={EatHere} options={{ title: 'Scan'}} />
              <Stack.Screen name="Progress-order" component={ProgressOrderScreen} options={{ title: 'Order Progress' }} />
            </Stack.Navigator>

          </NavigationContainer>
        </OrderState>
      </FirebaseState>

    </>
  )
}

const styles = StyleSheet.create({

})

export default App
