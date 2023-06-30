package OptionalsandTime;

import java.time.LocalDate;
import java.time.Period;

public class CalculateAge {

    public static void main(String[] args) {
        LocalDate currentDate = LocalDate.now();
        LocalDate birthdate = LocalDate.of(1998, 07, 19);
        Period age = Period.between(birthdate, currentDate);
        System.out.println(age.getYears());
    }

}
