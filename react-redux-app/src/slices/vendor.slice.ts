import { createSlice } from "@reduxjs/toolkit";

const vendorSlice = createSlice({
    name: 'vendors',
    initialState: {
        data: [
            {
                vendorId: "V001",
                name: "TechGear Electronics",
                email: "support@techgear.com",
                mobileNo: "+919812345678",
                category: "Electronics",
                address: "12 MG Road, Bengaluru, Karnataka",
                isActive: true
            },
            {
                vendorId: "V002",
                name: "FreshBasket Supplies",
                email: "sales@freshbasket.in",
                mobileNo: "+918765432109",
                category: "Groceries",
                address: "45 Park Street, Kolkata, West Bengal",
                isActive: true
            },
            {
                vendorId: "V003",
                name: "Fashion Hub",
                email: "contact@fashionhub.in",
                mobileNo: "+919900112233",
                category: "Clothing & Accessories",
                address: "78 Linking Road, Mumbai, Maharashtra",
                isActive: false
            },
            {
                vendorId: "V004",
                name: "Home Comforts",
                email: "info@homecomforts.in",
                mobileNo: "+917778889999",
                category: "Home & Kitchen",
                address: "22 Anna Salai, Chennai, Tamil Nadu",
                isActive: true
            },
            {
                vendorId: "V005",
                name: "HealthPlus Distributors",
                email: "support@healthplus.in",
                mobileNo: "+916661234567",
                category: "Healthcare",
                address: "10 FC Road, Pune, Maharashtra",
                isActive: false
            }
        ]
    },
    reducers: {
        deleteVendor: (state, action) => {
            state.data = state.data.filter((vendor) => vendor.vendorId !== action.payload);
            return state;
        }
    }
});

export const { deleteVendor } = vendorSlice.actions;

export default vendorSlice.reducer;