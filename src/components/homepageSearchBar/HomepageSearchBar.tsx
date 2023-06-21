import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const placeholders = [
    "740 S. Magnolia Rd, Gastonia, NC 28052",
    "9068 Saxon St, Wheaton, IL 60187",
    "7696 N. Grand St, Buckeye, AZ 85326",
    "20 W. Buttonwood St, Littleton, CO 80123",
    "521 Sussex Lane, Louisville, KY 40207",
    "38917 Fremont Rd, Carmel, NY 10512",
    "1250 N. Lantern Lane, Cocoa, FL 32927",
    "47 Lake Forest Ave, Apple Valley, CA 92307",
    "220 S. 33rd St, Philadelphia, PA 19104",
];

const MyComponent: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>(
        "220 S. 33rd St, Philadelphia, PA 19104"
    );

    useEffect(() => {
        let placeholderIndex = 0;
        const interval = setInterval(() => {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            setPlaceholder(placeholders[placeholderIndex]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            label="Enter your residential address"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            sx={{ width: "800px" }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <HomeIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};
export function HomepageSearchBar() {
    return <MyComponent />;
}
