import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface NavBarProps {
  title: string;
  onBackPress?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default NavBar;
