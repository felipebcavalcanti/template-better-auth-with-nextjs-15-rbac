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
      <h3 className="font-medium text-[#f6f8fc] text-base tracking-[0] leading-5 mb-3">
        Ações no app
      </h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <div key={index} className="space-y-1">
            <div className="font-normal text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
              {action.timeAgo}
            </div>
            <div className="font-normal text-blue-50 text-sm tracking-[0] leading-5">
              {action.action}
            </div>
            <div className="font-semibold text-[#eff6ff80] text-[10px] tracking-[0] leading-3">
              {action.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
