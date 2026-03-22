import { useState, useCallback } from 'react';

export function useClassSchedule() {
  const [selectedDay, setSelectedDay] = useState('Today');

  const onDayPress = useCallback((day: string) => {
    setSelectedDay(day);
  }, []);

  const onBook = useCallback((classId: string) => {
    console.log('Booking class:', classId);
  }, []);

  const onReserve = useCallback(() => {
    console.log('Reserving featured class');
  }, []);

  const onNavigate = useCallback((tabId: string) => {
    console.log('Navigate to:', tabId);
  }, []);

  return { selectedDay, onDayPress, onBook, onReserve, onNavigate };
}
