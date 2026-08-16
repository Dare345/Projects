package Java.CheckList.Model;

import java.sql.Time;

public abstract class Item {
    private String desc;
    private boolean complete;
    private Time time;

    public abstract String getDesc();
    public abstract String setDesc();
    public abstract boolean getStatus();
    public abstract boolean setStatus();
    public abstract Time getTime();
    public abstract Time setTime();
}
