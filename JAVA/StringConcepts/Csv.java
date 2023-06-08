import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Csv implements Comparable<Csv> {
    public String firstName;
    public String lastName;
    public String gpa;

    @Override
    public int compareTo(Csv o) {
        return this.lastName.compareTo(o.lastName);
    }

    public List<Csv> readCSV() {
            String filePath = "C://Users//om//Desktop//re.csv";
            List<Csv> csvList=new ArrayList<Csv>();
            try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    Csv csv=new Csv();
                    String[] values = line.split(",");
                    csv.firstName=values[0];
                    csv.lastName=values[1];
                    csv.gpa= values[2];
                    csvList.add(csv);
                }
                System.out.println("Before Sorting");
                System.out.println();
                printList(csvList);
            } catch (IOException e) {
                e.printStackTrace();
            }
            return csvList;
        }
        public void printList(List<Csv> csvList){
        for(Csv c : csvList){
            System.out.println(c.firstName +" " + c.lastName + " " + c.gpa);
        }
        }


}

