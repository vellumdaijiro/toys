import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class Iterator {
    public File currentPath;
    ArrayList<File> fileList;

    public Iterator(File file) {
        this.currentPath = file;
    }
    public Iterator(String path) {
        this.currentPath = new File(path);
    }
    public Iterator() {
        this.currentPath = new File("c://");
    }

    public void ls() {
        fileList = new ArrayList<>();
        File[] list = currentPath.listFiles();
        for (int i = 0; i < list.length; i++) {
            File temp = list[i];
            fileList.add(temp);
            System.out.println(i + " " + temp.getName());
        }
    }
    public void cd(int index) {
        if (index == -1) {
            if (currentPath.getParent() == null) {
                System.out.println("已经到根目录辣");
            }else {
                System.out.println(currentPath.getParent());
                currentPath = new File(currentPath.getParent());
            }
        }else {
            System.out.println(fileList.get(index));
            if (fileList.get(index).isDirectory()) {
                currentPath = new File(fileList.get(index).getPath());
            } else  {
                System.out.println("这不是一个目录");
            }
        }
    }
    public void changeDisk(String symbol) {
        if (new File(symbol+"//").exists()) {
            this.currentPath = new File(symbol+"//");
            System.out.println(currentPath.getPath());
        }else {
            System.out.println("盘符不存在");
        }
    }

    public static void main(String[] args) {
        var iterator = new Iterator();
        while (true) {
            Scanner sc = new Scanner(System.in);
            System.out.print(">_ ");
            String temp = sc.nextLine();
            if (temp.equals("ls")) {
                iterator.ls();
            }
            else if (temp.length() >= 2 && "cd".equals(temp.substring(0, 2))) {
                try {
                    iterator.cd(Integer.parseInt(temp.substring(3)));
                } catch (NumberFormatException e) {
                    System.out.println("请输入数字");
                }
            }
            else if (temp.length() >= 4 && "disk".equals(temp.substring(0, 4))) {
                iterator.changeDisk(temp.substring(5));
            }
            else if (temp.equals("exit")) {
                break;
            }
            else {
                System.out.println(temp);
                System.out.println("未知命令");
            }
        }
    }
}
