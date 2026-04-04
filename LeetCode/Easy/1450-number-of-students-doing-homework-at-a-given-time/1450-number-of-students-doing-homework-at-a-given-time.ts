function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {

    let count: number = 0;
    const startTimeLength = startTime.length;

    for (let i = 0; i < startTimeLength; i++) {
        if (startTime[i] <= queryTime) {
            if (endTime[i] >= queryTime) {
                count++;
            }
        }
    }

    return count;
};