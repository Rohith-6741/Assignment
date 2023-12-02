import java.util.*;

public class RomanToInteger {
    public static int romanToInt(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        char[] romanChars = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
        int[] romanValues = {1, 5, 10, 50, 100, 500, 1000};
        int result = 0;
        int prevValue = 0;
        
        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int currentValue = 0;
            int currentIndex = Arrays.binarySearch(romanChars, currentChar);
            
            if (currentIndex >= 0) {
                currentValue = romanValues[currentIndex];
            } else {
                System.out.println("Invalid Roman numeral: " + s);
                return -1;
            }
            
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner Stri = new Scanner(System.in);
        String str = Stri.nextLine();
        str = str.toUpperCase();
        int intValue = romanToInt(str);
        
        if (intValue != -1) {
            System.out.println("Integer value of Roman numeral " + str + " is: " + intValue);
        }
    }
}
