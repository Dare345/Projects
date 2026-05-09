import java.net.*;
import java.io.*;
import java.util.*;
public class HTTPServer{

    public static void main(String[] args) throws IOException{
        final ServerSocket server = new ServerSocket(8080);
        System.out.println("Listening for connection on port 8080 ....");
        while(true){
            //run forever
            try (Socket client = server.accept()){
            Date today = new Date();
            String response = "HTTP/1.1 200 OK\r\n\r\n" + today;
            client.getOutputStream().write(response.getBytes("UTF-8"));
            String response2 = "HTTP/1.1 200 OK\r\n\r\n" + "Hello";
            client.getOutputStream().write(response2.getBytes("UTF-8"));
            }
        }

    }

}