import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { React, useState } from 'react';
import SummaryPage from './components/SummaryPage';
import TransactionsPage from './components/TransactionsPage';
import { Ionicons } from '@expo/vector-icons';
import TransactionDetails from './components/TransactionDetails';

export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator()

  const [transactions] = useState(transactionList)

  const TransactionsStack = () => {
    return (
      <Stack.Navigator initialRouteName="Transactions">
        <Stack.Screen name="TransactionsList" component={TransactionsPage} options={transactionsHeaderStyle} initialParams={{ transactions }} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetails} options={detailsHeaderStyle} />
      </Stack.Navigator>)
  }


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            iconName = focused
              ? 'list-outline'
              : 'list-circle-outline';
          } else if (route.name === 'Summary') {
            iconName = focused ? 'bar-chart-outline' : 'stats-chart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        }
      })}>
        <Tab.Screen name="Transactions" component={TransactionsStack} options={{ headerShown: false }} initialParams={{ transactions }}>
        </Tab.Screen>
        <Tab.Screen name="Summary" component={SummaryPage} options={headerStyle} initialParams={{ transactions }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const headerStyle = {
  headerStyle:
  {
    backgroundColor: '#54b949',
  },
  headerTitleStyle:
  {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 28,
    marginLeft: 10,
  }
}

const detailsHeaderStyle = {
  headerStyle:
  {
    backgroundColor: '#54b949'
  },
  headerTitleStyle:
  {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 28,
    marginLeft: 5,
  },
  title: 'Transaction details'
}

const transactionsHeaderStyle = {
  headerStyle:
  {
    backgroundColor: '#54b949'
  },
  headerTitleStyle:
  {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 28,
    marginLeft: 5,
  },
  title: 'Transactions'
}
const transactionList = [
  {
    transactionName: "Loblaws",
    transactionAmount: 78.50,
    transactionDate: 'Jul 21, 2024',
    transactionStore: 'Loblaws',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Petro-Canada",
    transactionAmount: 65.25,
    transactionDate: 'Jul 20, 2024',
    transactionStore: 'Petro-Canada',
    transactionStoreLocation: 'Vancouver, BC'
  },
  {
    transactionName: "Swiss Chalet",
    transactionAmount: 42.75,
    transactionDate: 'Jul 19, 2024',
    transactionStore: 'Swiss Chalet',
    transactionStoreLocation: 'Montreal, QC'
  },
  {
    transactionName: "Amazon.ca",
    transactionAmount: 124.99,
    transactionDate: 'Jul 18, 2024',
    transactionStore: 'Amazon.ca',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Toronto Hydro",
    transactionAmount: 105.00,
    transactionDate: 'Jul 17, 2024',
    transactionStore: 'Toronto Hydro',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Hudson's Bay",
    transactionAmount: 89.95,
    transactionDate: 'Jul 16, 2024',
    transactionStore: "Hudson's Bay",
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Walmart Canada",
    transactionAmount: 112.30,
    transactionDate: 'Jul 5, 2024',
    transactionStore: 'Walmart Canada',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Cineplex",
    transactionAmount: 28.50,
    transactionDate: 'Jul 4, 2024',
    transactionStore: 'Cineplex',
    transactionStoreLocation: 'Vancouver, BC'
  },
  {
    transactionName: "Uber Eats",
    transactionAmount: 42.75,
    transactionDate: 'Jul 3, 2024',
    transactionStore: 'Uber Eats',
    transactionStoreLocation: 'Digital Food Delivery'
  },
  {
    transactionName: "Chapters Indigo",
    transactionAmount: 67.99,
    transactionDate: 'Jul 2, 2024',
    transactionStore: 'Chapters Indigo',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Airbnb",
    transactionAmount: 195.00,
    transactionDate: 'Jul 1, 2024',
    transactionStore: 'Airbnb',
    transactionStoreLocation: 'Digital Accommodation'
  },
  {
    transactionName: "LCBO",
    transactionAmount: 48.25,
    transactionDate: 'Jun 30, 2024',
    transactionStore: 'LCBO',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Canadian Museum of History",
    transactionAmount: 36.00,
    transactionDate: 'Jun 29, 2024',
    transactionStore: 'Canadian Museum of History',
    transactionStoreLocation: 'Ottawa, ON'
  },
  {
    transactionName: "Microsoft Store",
    transactionAmount: 499.99,
    transactionDate: 'Jun 28, 2024',
    transactionStore: 'Microsoft Store',
    transactionStoreLocation: 'Digital Purchase'
  },
  {
    transactionName: "IKEA Canada",
    transactionAmount: 185.50,
    transactionDate: 'Jun 27, 2024',
    transactionStore: 'IKEA Canada',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Spotify",
    transactionAmount: 9.99,
    transactionDate: 'Jun 26, 2024',
    transactionStore: 'Spotify',
    transactionStoreLocation: 'Digital Subscription'
  },
  {
    transactionName: "The Keg",
    transactionAmount: 112.75,
    transactionDate: 'Jun 25, 2024',
    transactionStore: 'The Keg',
    transactionStoreLocation: 'Montreal, QC'
  },
  {
    transactionName: "Google Play Store",
    transactionAmount: 25.00,
    transactionDate: 'Jun 24, 2024',
    transactionStore: 'Google Play Store',
    transactionStoreLocation: 'Digital Purchase'
  },
  {
    transactionName: "Canadian National Exhibition (CNE)",
    transactionAmount: 40.00,
    transactionDate: 'Jun 23, 2024',
    transactionStore: 'Canadian National Exhibition (CNE)',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Air Transat",
    transactionAmount: 280.00,
    transactionDate: 'Jun 22, 2024',
    transactionStore: 'Air Transat',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "HelloFresh",
    transactionAmount: 79.99,
    transactionDate: 'Jun 21, 2024',
    transactionStore: 'HelloFresh',
    transactionStoreLocation: 'Digital Grocery Delivery'
  },
  {
    transactionName: "Sporting Life",
    transactionAmount: 134.50,
    transactionDate: 'Jun 20, 2024',
    transactionStore: 'Sporting Life',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "PlayStation Store",
    transactionAmount: 69.99,
    transactionDate: 'Jun 19, 2024',
    transactionStore: 'PlayStation Store',
    transactionStoreLocation: 'Digital Purchase'
  },
  {
    transactionName: "Canada's Wonderland",
    transactionAmount: 75.00,
    transactionDate: 'Jun 18, 2024',
    transactionStore: "Canada's Wonderland",
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Uber Canada",
    transactionAmount: 35.25,
    transactionDate: 'Jun 17, 2024',
    transactionStore: 'Uber Canada',
    transactionStoreLocation: 'Digital Ride Sharing'
  },
  {
    transactionName: "Home Depot Canada",
    transactionAmount: 92.65,
    transactionDate: 'Jun 16, 2024',
    transactionStore: 'Home Depot Canada',
    transactionStoreLocation: 'Toronto, ON'
  },
  {
    transactionName: "Skype Credit",
    transactionAmount: 10.00,
    transactionDate: 'Jun 15, 2024',
    transactionStore: 'Skype',
    transactionStoreLocation: 'Digital Purchase'
  }
]
