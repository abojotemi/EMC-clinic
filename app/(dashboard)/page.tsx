import { cn } from "@/lib/utils";
import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DashboardDialog from "@/components/DashboardDialog";
const topTreatments: string[] = ["Malaria", "Hypertension", "HIV"];
const topPatients = [
  { name: "All patients", count: 12432 },
  { name: "In-patients", count: 42 },
  { name: "Discharged", count: 126 },
];

const topAppointments: { name: string; count: number }[] = [
  { name: "GOPD", count: 67 },
  { name: "POPD", count: 43 },
  { name: "SOPD", count: 28 },
];
const todaysAppointments: { name: string; id: string; status: string }[] = [
  { name: "User 1", id: "000001", status: "Cancelled" },
  { name: "User 2", id: "000002", status: "Reviewed" },
  { name: "User 3", id: "000003", status: "Waiting" },
  { name: "User 4", id: "000004", status: "Unpaid" },
];
const topServices: { name: string; count: number }[] = [];
const Home = () => {
  return (
    <div className="page">
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light">
          Welcome back, User
        </h1>

        <div className="flex border px-2 gap-3 border-gray-400 items-center pl-2 rounded-md">
          <FaSearch className="text-gray-400 size-6" />
          <input
            type="text"
            className="border-none outline-none w-60 h-12 bg-transparent"
            placeholder="Search by name, number or ID"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <Card className="dashboard-card">
            <CardHeader className="text-xl text-primary">
              <CardTitle>Top Treatments</CardTitle>
            </CardHeader>
            <hr className="h-1 bg-gray-400" />
            {topTreatments.map((treatment, index) => (
              <CardContent
                key={index}
                className="flex justify-between items-center"
              >
                <p>{treatment}</p>
              </CardContent>
            ))}
            <CardFooter className="dashboard-card-footer">View more</CardFooter>
          </Card>

          <Card className="dashboard-card">
            <CardHeader className="text-xl text-primary">
              <CardTitle>Top Patients</CardTitle>
            </CardHeader>
            <hr className="h-1 bg-gray-400" />
            {topPatients.map((patient, index) => (
              <CardContent
                key={index}
                className="flex justify-between items-center"
              >
                <p>{patient.name}</p>
                <p>{patient.count}</p>
              </CardContent>
            ))}

            <CardFooter className="dashboard-card-footer">View more</CardFooter>
          </Card>

          <Card className="dashboard-card">
            <CardHeader className="text-xl text-primary">
              <CardTitle>Top Appointments</CardTitle>
            </CardHeader>
            <hr className="h-1 bg-gray-400" />
            {topAppointments.map((appointment, index) => (
              <CardContent
                key={index}
                className="flex justify-between items-center"
              >
                <p>{appointment.name}</p>
                <p>{appointment.count}</p>
              </CardContent>
            ))}
            <CardFooter className="dashboard-card-footer">View more</CardFooter>
          </Card>
        </div>
        <div>
          <Card className="border-2 border-gray-400 h-full">
            <CardHeader className="text-xl text-primary">
              <CardTitle>Today&apos;s Appointments</CardTitle>
            </CardHeader>
            <hr className="border-2 border-gray-400" />
            {todaysAppointments.map((appointment, index) => (
              <DashboardDialog name={appointment.name} id={appointment.id} key={index}>
                <CardContent key={index} className="dashboard-appointment-card">
                  <p>{appointment.name}</p>
                  <p>{appointment.id}</p>
                  <p
                    className={cn(
                      "appointment-status",
                      appointment.status === "Cancelled"
                        ? "bg-red-200 text-red-700"
                        : appointment.status === "Reviewed"
                        ? "bg-green-200 text-green-700"
                        : appointment.status === "Waiting"
                        ? "bg-sky-200 text-sky-700"
                        : "bg-gray-200 text-gray-700"
                    )}
                  >
                    {appointment.status}
                  </p>
                </CardContent>
              </DashboardDialog>
            ))}
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-4">
        <Card className="border-2 bg-dark-gray/90 text-white h-full">
          <CardHeader className="text-xl text-white">
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <hr className="border-2 border-white" />
          <CardContent className="quick-actions">
            <p>Add Emergency Patient</p>
            <Sheet>
              <SheetTrigger>
                <div
                  className={`flex max-sm:justify-center p-2 rounded items-center space-x-3 bg-red-200 text-red-700`}
                >
                  <FaPlus className="size-7" />
                  <span>Add Patient</span>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-primary">Add Emergency Patient</SheetTitle>
                  <SheetDescription>
                    
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </CardContent>
          <CardContent className="quick-actions">
            <p>Book An Appointment</p>
            <Sheet>
              <SheetTrigger>
                <div
                  className={`flex max-sm:justify-center p-2 rounded items-center space-x-3 bg-blue-200 text-blue-700`}
                >
                  <FaPlus className="size-7" />
                  <span>Book</span>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-primary">Book an Appointment</SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </CardContent>
          <CardContent className="quick-actions">
            <p>Generate A Bill</p>
            <Sheet >
              <SheetTrigger>
                <div
                  className={`flex max-sm:justify-center p-2 rounded items-center space-x-3 bg-gray-200 text-gray-700`}
                >
                  <FaPlus className="size-7" />
                  <span>Generate</span>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-primary">Generate a Bill</SheetTitle>
                  <SheetDescription>
                    
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        <Card className={cn("border-2 border-gray-400 h-full")}>
          <CardHeader className="text-xl text-primary">
            <CardTitle>Top Services</CardTitle>
            {topServices.length > 0 ? "" : <p></p>}
          </CardHeader>
          <hr className="border-2 border-gray-400" />
          <div
            className={cn(
              "w-full h-full",
              topServices.length === 0 ? "flex jutify-center items-center" : ""
            )}
          >
            {topServices.length > 0 ? (
              topServices.map((service, index) => (
                <CardContent
                  key={index}
                  className="flex justify-between items-center"
                >
                  <p>{service.name}</p>
                  <p>{service.count}</p>
                </CardContent>
              ))
            ) : (
              <p className="text-gray-400 text-center flex-1 text-xl font-extrabold">
                Nothing to see
              </p>
            )}
          </div>
        </Card>
      </div>
      
    </div>
  );
};

export default Home;
