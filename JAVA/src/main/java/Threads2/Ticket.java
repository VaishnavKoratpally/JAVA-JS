package Threads2;

public class Ticket {
    private int availableTickets;

    public Ticket(int availableTickets) {
        this.availableTickets = availableTickets;
    }

    public synchronized boolean bookTicket(int requestedTickets) {
        if (availableTickets >= requestedTickets) {
            System.out.println(Thread.currentThread().getName() + " booking " + requestedTickets + " ticket(s)...");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            availableTickets -= requestedTickets;
            System.out.println(Thread.currentThread().getName() + " successfully booked " + requestedTickets + " ticket(s).");
            return true;
        } else {
            System.out.println(Thread.currentThread().getName() + " could not book " + requestedTickets + " ticket(s). Not enough available tickets.");
            return false;
        }
    }

    public static void main(String[] args) {
        Ticket ticketBookingSystem = new Ticket(10);

        Runnable bookingTask = () -> {
            for (int i = 1; i <= 5; i++) {
                ticketBookingSystem.bookTicket(1);
            }
        };

        Thread thread1 = new Thread(bookingTask, "Thread 1");
        Thread thread2 = new Thread(bookingTask, "Thread 2");

        thread1.start();
        thread2.start();
    }
}
