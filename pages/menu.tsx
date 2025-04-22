
import React from "react";

const menuData = {
  "Starters": [
    "Hara Bhara Kabab", "Chili Paneer", "Chilli Mushroom", "Samosa", "Gobi 65", "Veg Manchurian", 
    "Chili Idli", "Masala Vada", "Ulundu Vadai", "Dahi Vada", "Paneer Tikka", "Onion Garam Pakora",
    "Garlic Chicken", "Ginger Chicken", "Tandoori Chicken", "Chicken Tikka", "Afghani Chicken", 
    "Malai Tikka", "Chili Chicken", "Chicken 65", "Tangdi Kebab", "Fish Tikka", "Raan Musallam", 
    "Chicken Lollipop"
  ],
  "Chaat (Live)": [
    "Pani Puri", "Bhel Puri", "Aloo Tikki", "Dahi Bhala", "Pav Bhaji", "Samosa Chaat", 
    "Chaat Channa", "Puri Masala", "Chole Bhatura", "Papdi Chaat"
  ],
  "South Indian Live Cooking": [
    "Plain Dosa", "Masala Dosa", "Set Dosa", "Mini Uttapam", "Idli", "Kanchipuram Idli", 
    "Apaam", "Idiyappam", "Masala Vada", "Kerai Vada", "Thattai Vada"
  ],
  "South Indian Main (Veg)": [
    "Pongal", "Upma", "Lemon Semiya", "Coconut Rice", "Curd Rice", "Vegetable Biryani", 
    "Cabbage Kootu", "Pumpkin Kootu", "Paruppu Rasam", "Buttermilk"
  ],
  "South Indian Main (Non-Veg)": [
    "Pepper Chicken", "Chicken Chettinad", "Chicken Kurma", "Mutton Kurma", 
    "Fish Curry", "Prawn Curry", "Egg Masala"
  ],
  "North Indian Main (Veg)": [
    "Chana Masala", "Dal Makhani", "Kadai Paneer", "Paneer Butter Masala", 
    "Bhindi Masala", "Aloo Gobi", "Malai Kofta"
  ],
  "North Indian Main (Non-Veg)": [
    "Butter Chicken", "Chicken Rogan Josh", "Lamb Curry", "Kadai Chicken", 
    "Bhuna Chicken", "Lamb Saagwala"
  ],
  "Indo-Chinese": [
    "Fried Rice", "Chicken Fried Rice", "Veg Noodles", "Chicken Noodles", 
    "Chilli Chicken", "Vegetable Manchurian", "Chow Mein", "Sweet and Sour", 
    "Sweet Corn Soup", "Ginger Chicken"
  ],
  "Rice / Breads": [
    "Veg Dum Biryani", "Paneer Biryani", "Mushroom Biryani", "Chicken Biryani", 
    "Mutton Biryani", "Garlic Naan", "Cheese Naan", "Aloo Paratha", "Jeera Pulao"
  ],
  "Desserts & Drinks": [
    "Gulab Jamun", "Carrot Halwa", "Moong Dal Halwa", "Milk Kalakand", 
    "South Indian Coffee", "Mango Lassi", "Rose Milk", "Masala Tea"
  ]
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#1B1B1B] text-[#D6C4A8] px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#D4A017]">Our Menu</h1>
      <div className="max-w-6xl mx-auto space-y-10">
        {Object.entries(menuData).map(([category, items], idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold mb-4 border-b border-[#A77C47] pb-2">{category}</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#F8D479]">
              {items.map((item, iidx) => (
                <li key={iidx} className="bg-[#2A2A2A] p-4 rounded-xl hover:scale-[1.02] transition text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
