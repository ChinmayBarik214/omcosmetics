#include <iostream>
using namespace std;

int main()
{
    int a = 11;
    int *p;
    p = &a;
    cout << a << endl;
    cout << *p << endl;
    cout << (unsigned int)&a << endl;
    cout << (unsigned int)&p << endl;
    cout << *(&a) << endl;
    cout << a << endl;
    cout << (unsigned int)&a << endl;
    cout << *p << endl;
    cout << (unsigned int)&p << endl;
    return 0;
}
