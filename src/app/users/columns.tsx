"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "../types/user"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className=""
              >
                ID
                <ArrowUpDown className=" h-3 w-3" />
              </Button>
            )
          },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Name
                <ArrowUpDown className=" h-3 w-3" />
              </Button>
            )
          },
    },
    {
        accessorKey: "username",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Username
                    <ArrowUpDown className=" h-3 w-3" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className=" h-3 w-3" />
                </Button>
            )
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "website",
        header: "Website",
    },
    {
        accessorKey: "company",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Company
                    <ArrowUpDown className=" h-3 w-3" />
                </Button>
            )
        },
        cell: ({ row }) => row.original.company.name
    },
    {
        header:"Address",
        accessorKey: "address",
        cell: ({ row }) => `${row.original.address.street}, ${row.original.address.suite}, ${row.original.address.city}, ${row.original.address.zipcode}`
    }
]