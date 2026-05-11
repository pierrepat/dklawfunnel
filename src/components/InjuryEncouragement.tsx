import { injuryBearBySeverity, type InjuryBearSeverity } from "../data/assets";

type EncouragementCopy = {
  title: string;
  message: string;
  titleClass: string;
};

type InjuryEncouragementProps = {
  severity: InjuryBearSeverity;
  copy: EncouragementCopy;
};

/** Legacy component — not used in optimized funnel. Kept for reference. */
export function InjuryEncouragement({ severity, copy }: InjuryEncouragementProps) {
  const src = injuryBearBySeverity[severity];

  return (
    <div className="w-full text-center">
      <div className="mb-6 flex justify-center">
        <img
          src={src}
          alt=""
          className="h-32 w-32 rounded-xl object-cover"
          width={128}
          height={128}
        />
      </div>
      <h2 className={`mb-4 text-2xl font-bold md:text-3xl ${copy.titleClass}`}>{copy.title}</h2>
      <p className="mb-8 px-4 text-muted-foreground">{copy.message}</p>
    </div>
  );
}
