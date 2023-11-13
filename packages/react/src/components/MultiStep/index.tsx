import { Label, MultiStepContaniner, Step, Steps } from "./styles";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContaniner>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((stepValue) => {
          return (
            <Step key={stepValue} active={currentStep >= stepValue}></Step>
          );
        })}
      </Steps>
    </MultiStepContaniner>
  );
}
