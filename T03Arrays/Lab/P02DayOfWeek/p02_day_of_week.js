function dayOfWeek(day) {

    const daysOfWeek = ["Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"];

    const dayIndex = day - 1;
    if (dayIndex >= 0 && dayIndex < daysOfWeek.length) {
        console.log(daysOfWeek[dayIndex]);
    } else {
        console.log("Invalid day!");
    }
}

dayOfWeek(3);
console.log("-------------------------");
dayOfWeek(6);
console.log("-------------------------");
dayOfWeek(11);
console.log("-------------------------");
dayOfWeek(0);