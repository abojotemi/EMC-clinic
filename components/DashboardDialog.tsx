import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const DashboardDialog = ({
  children,
  name,
  id,
  age,
  bloodGroup,
  genotype,
  allergy,
  admitted = "no",
  lastSeen,
  lastReviewedBy,
  userCreatedBy,
  numberOfVisits,
}: {
  children?: React.ReactNode;
  name: string;
  id: string;
  age?: number;
  bloodGroup?: string;
  genotype?: string;
  allergy?: string;
  admitted?: "yes" | "no";
  lastSeen?: Date;
  lastReviewedBy?: string;
  userCreatedBy?: string;
  numberOfVisits?: number;
}) => {
  return (
    <div className="w-full h-full">
      <Dialog >
        <DialogTrigger className="w-full h-full">{children}</DialogTrigger>
        <DialogContent className="p-0 rounded-none border border-black h-fit">
          <DialogHeader className="bg-primary text-white h-12 p-3">
            <DialogTitle className="tracking-wider">
              PATIENTS OVERVIEW
            </DialogTitle>
          </DialogHeader>
          <div className="p-3 space-y-2">
            <div className="border border-black rounded p-2">
              <p>Patients Name: {name}</p>
              <p>Patient ID: {id}</p>
              <p>Age: {age}</p>
              <p>Blood Group: {bloodGroup}</p>
              <p>Genotype: {genotype}</p>
              <p>Allergy: {allergy}</p>
            </div>
            <div className="border border-black rounded p-2">
              <p>Admitted:{admitted}</p>
              <p>Last Seen:{lastSeen?.toDateString()}</p>
              <p>Last Reviewed by: {lastReviewedBy}</p>
              <p>User Created by: {userCreatedBy}</p>
              <p>Number of Visits: {numberOfVisits}</p>
            </div>
          </div>
          <div className="p-3 flex justify-end">
            <Link
              href="/patient"
              className="bg-primary text-white p-3 text-lg rounded cursor-pointer"
            >
              View
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardDialog;
