public abstract class Department {
    public abstract int getDepartmentSize();
}
class ConcreteDepartment extends Department{
    int size=120;
    public int getDepartmentSize(){
        return size;
    }
}