interface AppAction {
  timeAgo: string;
  action: string;
  details: string;
}

interface AppActionsProps {
  actions: AppAction[];
}

export default function AppActions({ actions }: AppActionsProps) {
  return (
    <div>
      <h3 className="montserrat-semibold-18 text-[#f6f8fc] mb-3">
        Ações no app
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <div key={index} className="space-y-1">
            <div className="montserrat-regular-14 text-[#eff6ff80]">
              {action.timeAgo}
            </div>
            <div className="montserrat-regular-14 text-blue-50">
              {action.action}
            </div>
            <div className="montserrat-regular-14 text-[#eff6ff80]">
              {action.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
