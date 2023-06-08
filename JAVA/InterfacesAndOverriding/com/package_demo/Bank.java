package com.package_demo;

public class Bank implements Interface1,Interface2{
    private int balance=100;

    public int getBalance() {
        return balance;
    }

    private void setBalance(int balance) {
        this.balance = balance;
    }


    @Override
    public void deposit(int amount) {
        this.balance+=amount;
        System.out.println("Balance after deposit: " +balance);
    }

    @Override
    public void withdraw(int amount) {
        if(balance<amount){
            System.out.println("Insufficient funds");
        }
        else {
            this.balance -= amount;
            System.out.println("Balance after withdraw: " + balance);
        }

    }
}
