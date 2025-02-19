namespace firstWFA
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            //never do anything here: Nothing exist yet
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "You clicked me...";
        }

        private void button1_MouseLeave(object sender, EventArgs e)
        {
            label1.Text = "You left me...";
        }
    }
}
