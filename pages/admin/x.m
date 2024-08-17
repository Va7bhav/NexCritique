% Define your array
A = [1, 2, 3, 4, 5];

% Loop through each element
for i = 1:length(A)
    % Access the ith element of the array
    disp(A(i));
end

% Power to be transmitted 
Ps = 700*1e6; % MW in Watts

% Line length
l = 315e3; % km in meters

% Impedance of the line
Ze = 320; % ohm

% Lambda
lambda = 5000; % km

% Voltage at sending end (per unit)
Vs = 1.0;

% Voltage at receiving end (per unit)
Vr = 0.9;

% Calculate the line reactance (X) in ohm/km
X = sqrt(Ze);

% Calculate the line reactance (X) for the entire line length in ohm
XL = X * l;

% Calculate B in Siemens/km
B = 1 / (lambda * Ze);

% Calculate the B for the entire line length in Siemens
BL = B * l;

% Denominator of the equation
denom = Vr^2 - Vs^2 * cos(2*pi/lambda * l);

% Find the critical power
P_c = Vs^2 * Vr^2 / (XL * sin(2*pi/lambda * l) + BL * denom);

% Nominal voltage in kV
V_n = sqrt(P_c / (3 * Ps));

fprintf('The nominal voltage level for the transmission line is %.2f kV\n', V_n);