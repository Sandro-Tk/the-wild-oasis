import Stat from "./Stat";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
    HiOutlineBanknotes,
    HiOutlineCalendarDays,
    HiOutlineDocumentChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    //1.
    const numBookings = bookings.length;

    //2.
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

    //3.
    const checkins = confirmedStays.length;

    //4.
    const occupation =
        confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
        (numDays * cabinCount);

    return (
        <>
            <Stat
                title="Bookings"
                color="blue"
                icon={<HiOutlineBriefcase />}
                value={numBookings}
            />
            <Stat
                title="Sales"
                color="green"
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title="Check ins"
                color="indigo"
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat
                title="Occupancy Rate"
                color="yellow"
                icon={<HiOutlineDocumentChartBar />}
                value={Math.round(occupation * 100) + "%"}
            />
        </>
    );
}

export default Stats;
