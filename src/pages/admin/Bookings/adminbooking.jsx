const bookings = [
  {
    bookingId: 101,
    roomId: "Deluxe",
    email: "john.doe@example.com",
    status: "pending",
    reason: "Awaiting payment",
    start: new Date("2025-07-01"),
    end: new Date("2025-07-05"),
    notes: "Requested early check-in",
    timestamp: new Date("2025-06-25T10:15:00Z")
  },
  {
    bookingId: 102,
    roomId: "Standard",
    email: "jane.smith@example.com",
    status: "confirmed",
    reason: "N/A",
    start: new Date("2025-07-10"),
    end: new Date("2025-07-12"),
    notes: "Anniversary stay",
    timestamp: new Date("2025-06-26T14:30:00Z")
  },
  {
    bookingId: 103,
    roomId: "Suite",
    email: "mike.jordan@example.com",
    status: "cancelled",
    reason: "Personal emergency",
    start: new Date("2025-07-20"),
    end: new Date("2025-07-25"),
    notes: "Needs refund",
    timestamp: new Date("2025-06-27T09:00:00Z")
  },
  {
    bookingId: 104,
    roomId: "Executive",
    email: "linda.lee@example.com",
    status: "confirmed",
    reason: "Company-sponsored trip",
    start: new Date("2025-08-01"),
    end: new Date("2025-08-04"),
    notes: "Vegetarian meals required",
    timestamp: new Date("2025-06-28T16:45:00Z")
  }
];


export default function AdminBooking() {
    return (
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-4 text-white ">Booking Records</h2>
        
        <table className="w-full text-left border-collapse bg-white rounded shadow overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 border">Booking ID</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Room Type</th>
              <th className="py-2 px-4 border">Start Date</th>
              <th className="py-2 px-4 border">End Date</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Reason</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {
              bookings.map(
                (booking,index)=>{
                  // Choose color based on status
                  let statusColor = "";
                  if (booking.status === "pending") statusColor = "text-yellow-500";
                  else if (booking.status === "confirmed") statusColor = "text-green-600";
                  else if (booking.status === "cancelled") statusColor = "text-red-500";
                  else statusColor = "text-gray-700";
                  return(
                    <tr key={index} className="hover:bg-blue-400">
                      <td>{booking.bookingId}</td>
                      <td>{booking.email}</td>
                      <td>{booking.roomId}</td>
                      <td>{booking.start.toDateString()}</td>
                      <td>{booking.end.toDateString()}</td>
                      <td className={statusColor}>{booking.status}</td>
                      <td>{booking.reason}</td>
                    </tr>
                  )  
                }
              )
            }
          </tbody>
        </table>
      </div>
    );
}