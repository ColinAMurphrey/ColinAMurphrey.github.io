import os
import pyperclip

while True:
    init_without_power = 2264585

    try:
        updated_value = int(input("Input the updated value: ").replace(",", ""))
        calculation = init_without_power - updated_value
        calculation = ('{:,}'.format(calculation))

        os.system('cls' if os.name == 'nt' else 'clear')

        print(f"Value: {calculation}")
        pyperclip.copy(calculation)
    
    except:
        pass