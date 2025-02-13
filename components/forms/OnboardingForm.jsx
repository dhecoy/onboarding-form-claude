'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon, CheckCircle, Plus, Trash2, X } from "lucide-react";

const tabs = [
  "Företagsuppgifter", "Ekonomi", "Användare", "Leverantörer", "Prisinställningar",
  "Förvaringar", "Lager", "Integrationer", "Viktig information"
];

const roles = ["Ägare", "Admin", "Användare"];

export default function OnboardingForm() {
  const [activeTab, setActiveTab] = useState("Företagsuppgifter");
  const [completedTabs, setCompletedTabs] = useState({});
  const [formData, setFormData] = useState({
    companyName: "",
    organizationNumber: "",
    vatNumber: "",
    address: "",
    postalCode: "",
    city: "",
    companyEmail: "",
    companyPhone: "",
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    invoiceType: "",
    invoiceEmail: "",
    bankGiro: "",
    lastInvoiceNumber: "",
    paymentTerms: "",
    logo: null,
    users: []
  });

  // Fortsätt med resten av komponenten...
