#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool ehPalindromo(char *str);

int main()
{
    printf("%d\n", ehPalindromo("arara"));
    return 0;
}

bool ehPalindromo(char *str)
{
    int i_rev;

    for (int i = 0; i < strlen(str); i++)
    {
        i_rev = strlen(str) - 1 - i;
        if (str[i] != str[i_rev])
        {
            return false;
        }
    }

    return true;
}
