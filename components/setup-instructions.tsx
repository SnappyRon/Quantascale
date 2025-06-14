export function CalendarSetupInstructions() {
  return (
    <div className="bg-gray-900/50 border border-gray-800/50 rounded-2xl p-8 mt-8">
      <h3 className="text-xl font-light text-white mb-6">📅 Calendar Setup Instructions</h3>

      <div className="space-y-6 text-gray-300 font-light">
        <div>
          <h4 className="text-sky-400 font-medium mb-2">Option 1: Calendly Integration (Recommended)</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>
              Create a free account at{" "}
              <a href="https://calendly.com" className="text-sky-400 hover:underline">
                calendly.com
              </a>
            </li>
            <li>Set up your meeting types (15min, 30min, 60min calls)</li>
            <li>Copy your Calendly URLs and replace the placeholder URLs in the code</li>
            <li>For embedded widget, copy the embed code from Calendly dashboard</li>
          </ol>
        </div>

        <div>
          <h4 className="text-sky-400 font-medium mb-2">Option 2: Google Calendar</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Use Google Calendar's appointment scheduling feature</li>
            <li>Create booking pages for different meeting types</li>
            <li>Replace URLs with your Google Calendar booking links</li>
          </ol>
        </div>

        <div>
          <h4 className="text-sky-400 font-medium mb-2">Option 3: Other Calendar Services</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              <strong>Acuity Scheduling:</strong> Professional scheduling with advanced features
            </li>
            <li>
              <strong>Cal.com:</strong> Open-source alternative to Calendly
            </li>
            <li>
              <strong>Microsoft Bookings:</strong> For Microsoft 365 users
            </li>
            <li>
              <strong>Zoom Scheduler:</strong> Integrated with Zoom meetings
            </li>
          </ul>
        </div>

        <div className="bg-sky-600/10 border border-sky-600/20 rounded-xl p-4">
          <p className="text-sky-300 text-sm">
            <strong>💡 Pro Tip:</strong> Replace the placeholder URLs in the CalendarIntegration component with your
            actual booking links to make the calendar functional.
          </p>
        </div>
      </div>
    </div>
  )
}
