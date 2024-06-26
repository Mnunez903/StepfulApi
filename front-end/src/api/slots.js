const {VITE_API_URL} = import.meta.env

export const createNewSlot = async (userId, timeslotData) => {
  const slotResponse = await fetch(`${VITE_API_URL}/slots`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      coach_id: userId,
      start_time: timeslotData.start,
      end_time: timeslotData.end,
    })
  })
  return await slotResponse.json()

}

export const fetchSlots = async (queryParams = {}) => {
  const buildQueryParams = new URLSearchParams(queryParams).toString()
  const slotsResponse = await fetch(`${VITE_API_URL}/slots?${buildQueryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })

  return await slotsResponse.json()
}

export const updateSlotWithStudent = async (user, slotId) => {
  const slotsResponse = await fetch(`${VITE_API_URL}/slots/${slotId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      id: slotId,
      student_id: user.id,
      status: 'booked'
    })
  })

  return await slotsResponse.json()
}