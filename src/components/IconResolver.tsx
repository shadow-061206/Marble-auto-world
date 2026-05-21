import {
  Sparkles,
  ShieldAlert,
  ShieldCheck,
  Droplet,
  Wrench,
  Zap,
  Paintbrush,
  Compass,
  FileText,
  Settings,
  Award,
  Shield,
  Eye,
  FileCheck,
  Star,
  MapPin,
  Mail,
  Phone,
  Clock,
  ExternalLink,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
}

export default function IconResolver({ name, className = "w-5 h-5" }: IconResolverProps) {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'Droplet':
      return <Droplet className={className} />;
    case 'Wrench':
      return <Wrench className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Paintbrush':
      return <Paintbrush className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Settings':
      return <Settings className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'FileCheck':
      return <FileCheck className={className} />;
    case 'Star':
      return <Star className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Mail':
      return <Mail className={className} />;
    case 'Phone':
      return <Phone className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'CheckCircle':
      return <CheckCircle className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}
