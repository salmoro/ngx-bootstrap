// compare two arrays, return the number of differences
import { toInt } from './type-checks';
export function compareArrays(array1, array2, dontConvert) {
    const len = Math.min(array1.length, array2.length);
    const lengthDiff = Math.abs(array1.length - array2.length);
    let diffs = 0;
    let i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1hcnJheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY2hyb25vcy91dGlscy9jb21wYXJlLWFycmF5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0QyxNQUFNLFVBQVUsYUFBYSxDQUFJLE1BQVcsRUFBRSxNQUFXLEVBQUUsV0FBb0I7SUFDN0UsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksQ0FBQyxDQUFDO0lBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2VBQ3ZDLENBQUMsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVELEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQztBQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcGFyZSB0d28gYXJyYXlzLCByZXR1cm4gdGhlIG51bWJlciBvZiBkaWZmZXJlbmNlc1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4vdHlwZS1jaGVja3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBcnJheXM8VD4oYXJyYXkxOiBUW10sIGFycmF5MjogVFtdLCBkb250Q29udmVydDogYm9vbGVhbikge1xyXG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpO1xyXG4gIGNvbnN0IGxlbmd0aERpZmYgPSBNYXRoLmFicyhhcnJheTEubGVuZ3RoIC0gYXJyYXkyLmxlbmd0aCk7XHJcbiAgbGV0IGRpZmZzID0gMDtcclxuICBsZXQgaTtcclxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGlmICgoZG9udENvbnZlcnQgJiYgYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pXHJcbiAgICAgIHx8ICghZG9udENvbnZlcnQgJiYgdG9JbnQoYXJyYXkxW2ldKSAhPT0gdG9JbnQoYXJyYXkyW2ldKSkpIHtcclxuICAgICAgZGlmZnMrKztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBkaWZmcyArIGxlbmd0aERpZmY7XHJcbn1cclxuIl19