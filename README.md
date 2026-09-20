# Interactive Productivity Dashboard
**Student Name:** Aaron Hunter<br>
This project contains a web-based dashboard for **WEB-115** to demonstrate interactive **JavaScript** features.
## TODO: Future Enhancements
- [X] Add a Weekly Task Goal Calculator,
- [ ] Coming Soon...
- [ ] Coming Soon...
## Weekly Task Goals
- This feature allows a user to enter their name, Daily Task Goal, and Weekly Bonus Tasks to calculate their Total Weekly Goal!
## Imperial/Metric Converter
- This feature allows a user to do certain conversions between imperial and metric.
    Conversions supported:
    - Inch to centimeter
    - Foot to centimeter
    - Yard to meter
    - Mile to kilometer
    - Centimeter to inch
    - Centimeter to foot
    - Meter to yard
    - Kilometer to mile
    ### Logic and Pseudocode
    BEGIN

        IF convert_button is clicked
            PREVENT form submission
            GET number entered in form
            GET conversion selected in form
            SET result = METRIC_CONVERTER(number, conversion)
            DISPLAY result
        END IF

    END

    FUNCTION METRIC_CONVERTER(number, conversion)

        IF conversion = "inch to centimeter" THEN
            RETURN number * 2.54

        ELSE IF conversion = "foot to centimeter" THEN
            RETURN number * 30.48

        ELSE IF conversion = "yard to meter" THEN
            RETURN number * 0.91

        ELSE IF conversion = "mile to kilometer" THEN
            RETURN number * 1.61

        ELSE IF conversion = "centimeter to inch" THEN
            RETURN number * 0.39

        ELSE IF conversion = "centimeter to foot" THEN
            RETURN number * 0.0328

        ELSE IF conversion = "meter to yard" THEN
            RETURN number * 1.09

        ELSE IF conversion = "kilometer to mile" THEN
            RETURN number * 0.62

        ELSE
            RETURN "Invalid conversion selection"

        END IF

    END FUNCTION