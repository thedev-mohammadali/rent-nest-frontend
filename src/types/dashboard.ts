import { Category } from "./category";

export type RentalRequestStatus =
  "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";

export type RentalAgreementStatus =
  "PENDING_PAYMENT" | "ACTIVE" | "COMPLETED" | "CANCELLED";

export type PaymentStatus = "PENDING" | "PAID" | "FAILED";

export interface RentalRequest {
  id: string;
  status: RentalRequestStatus;
  tenantMessage: string;
  requestedMoveInDate: string;
  durationInMonths: number;

  property: {
    id: string;
    title: string;
    location: string;
    rent: string;
  };

  tenant: {
    id: string;
    name: string;
    email: string;
  };
}

export interface RentalAgreement {
  id: string;

  status: RentalAgreementStatus;

  leaseStartDate: string;
  leaseEndDate: string;

  tenant: {
    id: string;
    name: string;
  };

  property: {
    id: string;
    title: string;
    rent: string;
    location: string;
  };
}

export interface Payment {
  id: string;

  rentalAgreementId: string;

  amount: string;

  currency: string;

  status: PaymentStatus;

  provider: string;

  paidAt: string | null;

  createdAt: string;
}

export interface TenantDashboardData {
  rentalRequests: RentalRequest[];
  agreements: RentalAgreement[];
  payments: Payment[];
}

export interface LandlordProperty {
  id: string;
  title: string;
  location: string;
  rent: string;
  isAvailable: boolean;
}

export interface LandlordDashboardData {
  properties: LandlordProperty[];
  rentalRequests: RentalRequest[];
  agreements: RentalAgreement[];
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AdminProperty {
  id: string;
  title: string;
  location: string;
  isAvailable: boolean;

  landlord: {
    name: string;
  };
}

export interface AdminCategory {
  id: string;
  name: string;
  _count?: {
    properties: number;
  };
}

export interface AdminDashboardData {
  users: AdminUser[];
  properties: AdminProperty[];
  categories: Category[];
  payments: Payment[];
  totalUsers: number;
  totalProperties: number;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data: {
    checkoutUrl: string;
  };
}
