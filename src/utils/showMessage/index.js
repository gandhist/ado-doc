import { showMessage } from "react-native-flash-message"
import { colors } from "../colors";
colors

export const showError = ({ message, description }) => {
    showMessage({
        message: message,
        description: description,
        type: "warning",
        backgroundColor: colors.error,
        color: colors.white,
        animated: true,
        hideOnPress: true,
        autoHide: false
    });
}

export const showSuccess = ({ message, description }) => {
    showMessage({
        message: message,
        description: description,
        type: "success",
        animated: true,
        hideOnPress: true,
        autoHide: true
    });
}