// function to group buttons in rows
export default function GroupButtons(buttons, groupSize){
    const groupedButtons = [];
    for (let i = 0; i < buttons.length; i += groupSize) {
      groupedButtons.push(buttons.slice(i, i + groupSize));
    }
    return groupedButtons;
}