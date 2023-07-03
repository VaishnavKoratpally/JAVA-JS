package Threads2;

public class DeadLock {
        private static Object lock1 = new Object();
        private static Object lock2 = new Object();

        private static class Thread1 extends Thread {
            @Override
            public void run() {
                synchronized (lock1) {
                    System.out.println("Thread 1 acquired lock1");

                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                    synchronized (lock2) {
                        System.out.println("Thread 1 acquired lock2");
                    }
                }
            }
        }

        private static class Thread2 extends Thread {
            @Override
            public void run() {
                synchronized (lock2) {
                    System.out.println("Thread 2 acquired lock2");

                    try {
                        Thread.sleep(100);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                    synchronized (lock1) {
                        System.out.println("Thread 2 acquired lock1");
                    }
                }
            }
        }

        public static void main(String[] args) {
            Thread1 thread1 = new Thread1();
            Thread2 thread2 = new Thread2();

            thread1.start();
            thread2.start();
        }
    }

