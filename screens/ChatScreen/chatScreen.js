import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice/counterSlice";
import { TouchableOpacity } from "react-native";

function ChatScreen() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          aria-label="Increment value"
          onPress={() => dispatch(increment())}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
        <TouchableOpacity
          aria-label="Decrement value"
          onPress={() => dispatch(decrement())}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ChatScreen;
