import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function SelectForm() {
  const [value,setValue] = useState("");
  const handleValueChange = () =>{
    setValue(value);
  }
  console.log(value)

  return (
    <div className='flex justify-center'>
        
        <Select >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Repository ?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cms">Cms</SelectItem>
              <SelectItem value="dailycode">Daily-Code</SelectItem>
              <SelectItem value="chess">Chess</SelectItem>
            </SelectContent>
        </Select>
  </div>
  )
}

  
