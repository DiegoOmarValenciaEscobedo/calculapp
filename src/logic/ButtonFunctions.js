import {evaluate} from "mathjs";
import { Alert } from "react-native";

export default function ButtonFunctions(button, globalState, setGlobalState) {

    if (button.type == 1){
        addChar();
    }
    else if (button.type == 2){
        clear();
    }
    else if (button.type == 3){
        deleteChar();
    }
    else if (button.type == 4){
        addParentesis();
    }else{
        calculate();
    }
    return null

    function addChar() {
        // Get the current variable values from the global state
        const newGlobalState = { ...globalState };
        newGlobalState.operation += button.value;
        setGlobalState(newGlobalState);
    }
      
      function addParentesis() {
        const newGlobalState = { ...globalState };
        newGlobalState.operation += newGlobalState.parentesis ? ')' : '('; 
        newGlobalState.parentesis = !newGlobalState.parentesis;
        setGlobalState(newGlobalState);
      }
      
      function deleteChar() {
        const newGlobalState = { ...globalState };
        newGlobalState.operation = newGlobalState.operation.slice(0, -1);
        setGlobalState(newGlobalState);
      }
      
      function clear() {
        const newGlobalState = { ...globalState };
        newGlobalState.operation = '';
        newGlobalState.result = '';
        setGlobalState(newGlobalState);
      }
      
    function calculate() {
        try {
            // evaluate the operation and update the result
            let newResult = evaluate(globalState.operation);
            // round the result to x decimal places
            newResult = parseFloat(newResult.toFixed(globalState.decimalCount));
            // convert the result to string
            newResult = newResult.toString();
            const newGlobalState = { ...globalState };
            newGlobalState.result = newResult;
            setGlobalState(newGlobalState);
        } catch (error) {
            Alert.alert('Error', 'La operación que estas intentando realizar es incorrecta.');
        }
    }
}