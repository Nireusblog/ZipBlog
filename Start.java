import java.io.File;
import java.io.IOException;

public class Start {

    public static void main(String[] args) {
        // Get the current working directory
        String currentWorkingDirectory = System.getProperty("user.dir");

        // Run npm start in the root directory
        ProcessBuilder processBuilder = new ProcessBuilder("npm", "start");
        processBuilder.directory(new File(currentWorkingDirectory));
        try {
            processBuilder.start();
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Run npm start in the /api directory
        processBuilder = new ProcessBuilder("npm", "start");
        processBuilder.directory(new File(currentWorkingDirectory + "/api"));
        try {
            processBuilder.start();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}