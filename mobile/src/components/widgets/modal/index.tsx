import React from "react";
import { View, ViewStyle } from "react-native";
import NativeModal from "react-native-modal";
import { hp, wp } from "../../../utils/normalize";

interface ModalProps {
  style?: ViewStyle | ViewStyle[];
  isVisible: boolean;
  onClose?: () => void;
  height?: number;
}

const modalStyles: ViewStyle = {
  margin: 0,
  paddingVertical: 16,
  height: "80%",
  width: "100%",
  borderRadius: 0,
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  backgroundColor: "#171717",
};

export const Modal: React.FC<ModalProps> = ({ children, style, isVisible, onClose }) => {
  return (
    <NativeModal
      isVisible={isVisible}
      style={style}
      backdropOpacity={0.5}
    >
      {children}
    </NativeModal>
  );
};

export const SwipeDownModal: React.FC<ModalProps> = ({ children, style, isVisible, onClose, height }) => {
  return (
    <NativeModal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      swipeDirection={["down"]}
      style={[{
        justifyContent: "flex-end",
        margin: 0,
        borderRadius: 0,
      }, style]}
    >
      <View style={[modalStyles, { height }]}>
      <View
        style={{
            alignSelf: 'center',
            width: Number(wp(60)),
            height: Number(hp(2)),
            backgroundColor: "#cfcdcd",
            borderRadius: 5,
            marginBottom: 10,
          }}
      />
      {children}
      </View>
    </NativeModal>
  );
};
