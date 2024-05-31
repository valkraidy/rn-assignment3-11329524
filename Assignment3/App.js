import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";
import { categoriesData } from "./mockData/categories.data";
import { taskData } from "./mockData/task.data";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.padding, { gap: 20 }]}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Hello, Devs</Text>
            <Text style={styles.headerSubtitle}>14 tasks devs</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        {/**Search Bar */}
        <View style={styles.searchContainer}>
          {/**TextInput Box  */}
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
          {/**FIlter Icon */}
          <View style={styles.filterIconContainer}>
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        {/**Categories */}
        <View style={{ gap: 10 }}>
          <Text style={styles.categoryTitle}>Categories</Text>

          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View style={[styles.categoryItem, { gap: 10 }]}>
                <View>
                  <Text style={styles.categoryItemTitle}>{item.name}</Text>
                  <Text>{item.description}</Text>
                </View>
                <Image source={item.image} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/**Ongoing Tasks */}
        <View style={{ gap: 20 }}>
          <Text style={styles.ongoingTaskTitle}>Ongoing Task</Text>

          <FlatList
            data={taskData}
            renderItem={({ item }) => (
              <View style={[styles.taskItem, { gap: 10 }]}>
                <View>
                  <Text style={styles.taskItemTitle}>{item.name}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    flex: 1,
  },
  padding: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontWeight: 'normal',
  },
  profileButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 10,
    padding: 5,
  },
  filterIconContainer: {
    backgroundColor: '#F0522F',
    padding: 8,
    borderRadius: 15,
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  categoryItem: {
    backgroundColor: 'white',
    marginRight: 20,
    padding: 20,
    borderRadius: 15,
  },
  categoryItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  ongoingTaskTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  taskItem: {
    backgroundColor: 'white',
    borderColor: '#E8D1BA',
    borderWidth: 1,
    marginRight: 20,
    padding: 20,
    borderRadius: 15,
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
  },
  taskItemTitle: {
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default App;
