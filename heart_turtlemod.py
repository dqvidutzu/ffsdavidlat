import turtle
import math
screen = turtle.Screen()
screen.setup(width=800, height=800)
screen.title("inimioara")
t = turtle.Turtle()
t.speed(6)
t.color("red")
t.pensize(2)
def draw_heart():
    theta = math.radians(0)
    x = 16 * math.sin(theta)**3
    y = 13 * math.cos(theta) - 5 * math.cos(2 * theta) - 2 * math.cos(3 * theta) - math.cos(4 * theta)
    t.penup()
    t.goto(x * 20, y * 20)
    t.pendown()
    t.begin_fill()
    for i in range(360):
        theta = math.radians(i)
        x = 16 * math.sin(theta)**3
        y = 13 * math.cos(theta) - 5 * math.cos(2 * theta) - 2 * math.cos(3 * theta) - math.cos(4 * theta)
        t.goto(x * 20, y * 20)
    t.end_fill()

draw_heart()
t.hideturtle()
turtle.done()
