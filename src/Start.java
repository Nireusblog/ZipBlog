package src;

import java.io.File;
import java.io.IOException;

public class Start {

    public static void main(String[] args) {
        // Get the current working directory
        String currentWorkingDirectory = System.getProperty("user.dir");

        // Run the start script in the /api directory
        ProcessBuilder processBuilder1 = new ProcessBuilder("node", "api/start.js");
        processBuilder1.directory(new File(currentWorkingDirectory));

        // Run the start script in the root directory
        ProcessBuilder processBuilder2 = new ProcessBuilder("node", "start.js");
        processBuilder2.directory(new File(currentWorkingDirectory));

        try {
            Process process1 = processBuilder1.start();
            process1.waitFor(); // Wait for the process to complete
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }

        try {
            Process process2 = processBuilder2.start();
            process2.waitFor(); // Wait for the process to complete
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}