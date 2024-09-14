// import { DayType, OpeningTime } from '../types/gym';
//
// interface MergedOpeningTimes extends OpeningTime {
//     endDay: DayType;
// }
//
// export const mergeConsecutiveDays = (openingTimes: OpeningTime[]): MergedOpeningTimes[] => {
//     const newTimes: MergedOpeningTimes[] = [];
//     let lastIndex = 0;
//
//     newTimes.push({
//         day: openingTimes[0].day,
//         endDay: openingTimes[0].day,
//         endTime: openingTimes[0].endTime,
//         startTime: openingTimes[0].startTime
//     });
//
//     openingTimes.forEach(({ day, endTime, startTime }) => {
//         const { endTime: newEndTime, startTime: newStartTime } = newTimes[lastIndex];
//
//         if (endTime === newEndTime && startTime === newStartTime) {
//             newTimes[lastIndex] = { ...newTimes[lastIndex], endDay: day };
//         } else {
//             newTimes.push({
//                 day,
//                 endDay: day,
//                 startTime,
//                 endTime
//             });
//
//             lastIndex++;
//         }
//     });
//
//     return newTimes;
// };
